import React, { useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

interface FormData {
  name: string;
  description: string;
}

export const ModalForm: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({ name: "", description: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Edit City</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label>Description:</label>
            <input type="text" name="description" value={formData.description} onChange={handleChange} />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>, document.getElementById("modal-root")!,
  );
};


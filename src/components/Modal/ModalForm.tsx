import React, { useEffect, useId, useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "../ui/Button/Button.tsx";
import { ICity } from "../../types/types.ts";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: IFormData) => void;
  editingCity: ICity | null;
}

interface IFormData {
  title: string;
  description: string;
}

export const ModalForm: React.FC<IModalProps> = ({ isOpen, onClose, onSubmit, editingCity }) => {

  const cityNameId = useId();
  const cityDescriptionId = useId();
  const [formData, setFormData] = useState<IFormData>({
    title: editingCity?.title || "",
    description: editingCity?.description || "",
  });

  useEffect(() => {
    setFormData({ title: editingCity?.title || "", description: editingCity?.description || "" });
  }, [editingCity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <div className="modal-top">
          <h2>Edit City</h2>
          <span className="close" onClick={onClose}>&times;</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={"controls"}>
            <label htmlFor={cityNameId}>Name:</label>
            <textarea id={cityNameId} name="title" value={formData.title} onChange={handleChange}
                      className={"textarea"} />
          </div>
          <div className={"controls"}>
            <label htmlFor={cityDescriptionId}>Description:</label>
            <textarea id={cityDescriptionId} className={"textarea"} name="description" value={formData.description}
                      onChange={handleChange} />
          </div>
          <Button type="submit" style={{ marginTop: "10px" }}>Save</Button>
        </form>
      </div>
    </div>, document.getElementById("modal-root")!,
  );
};


interface IHeaderProps {
  title: string;
}

export function Header({ title }: IHeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <h1 className="header__heading">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}

import css from './Container.module.css';

export default function Container ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const classList = [
    css.container,
    ...(className ? [className] : []),
  ];

  return (
    <div className={classList.join(' ')}>
        {children}
    </div>
  )
}

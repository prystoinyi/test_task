import css from './Button.module.css';

export default function Button ({
  className,
  text,
  onClick,
}: {
  className?: string;
  text: string;
  onClick?: () => void;
}) {
  const classList = [
    css.btn,
    ...(className ? [className] : []),
  ];

  return (
    <button className={classList.join(' ')} onClick={onClick}>
        <span className={css.text}>{text}</span>
    </button>
  )
}

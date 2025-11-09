export default function Card({
  children,
  buttonStyle,
  sectionStyle,
  buttonText,
}) {
  return (
    <section className={sectionStyle}>
      {children}
      <button
        type="button"
        className={`${buttonStyle} py-2 px-4 rounded-full font-bold cursor-pointer hover:scale-105 transition-all duration-300`}
      >
        {buttonText}
      </button>
    </section>
  );
}

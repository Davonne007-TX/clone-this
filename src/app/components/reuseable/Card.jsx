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
        className={`${buttonStyle} cursor-pointer p-2 rounded-full text-lg md:text-2xl`}
      >
        {buttonText}
      </button>
    </section>
  );
}

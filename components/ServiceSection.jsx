export default function ServiceSection({ title, desc }) {
  return (
    <section className="bg-white w-full max-w-[1440px] mx-auto px-8 py-12 text-center">
      {/* Service Title */}
      <h2 className="font-muli font-extrabold text-[45px] leading-[100%] tracking-[0%] text-center">
        {title}
      </h2>
      {/* Service Description */}
      <p className="font-muli font-normal text-[18px] leading-[100%] tracking-[0%] text-center mt-4">
        {desc}
      </p>
     
     
    </section>
  );
}

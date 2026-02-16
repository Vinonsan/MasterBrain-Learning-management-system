
const ContactMap = () => {
  return (
    <section className="py-12">
      <div className="mx-auto rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
        <iframe
          src="https://www.google.com/maps?q=Point%20Pedro%20Road%2C%20Kankesanthurai%2C%20Sri%20Lanka&output=embed"
          width="100%"
          height="420"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        />
      </div>
    </section>
  );
};

export default ContactMap;

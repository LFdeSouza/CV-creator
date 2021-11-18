const Personal = () => {
  return (
    <section className="form-sections">
      <h2>Personal Information</h2>
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="Phone number" />
      <input type="text" placeholder="Email" />
      <textarea type="text" placeholder="Description" className="description" />
    </section>
  );
};
export default Personal;

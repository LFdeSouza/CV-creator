const Personal = ({ getInfo }) => {
  return (
    <section className="form-sections">
      <h2>Personal Information</h2>
      <input
        type="text"
        placeholder="Full name"
        name="name"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        name="address"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone number"
        name="phone"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <textarea
        type="text"
        className="description"
        placeholder="Description"
        name="description"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
    </section>
  );
};
export default Personal;

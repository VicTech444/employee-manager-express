export default function UserInformation() {
  return (
    <form>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={""}
        required
        readOnly
        disabled
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={""}
        required
        readOnly
        disabled
      />

      <label htmlFor="email">Email Address:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={""}
        required
        readOnly
        disabled
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={"asd"}
        required
        readOnly
        disabled
      />

      <label htmlFor="phone">Phone number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={""}
        required
        readOnly
        disabled
      />
    </form>
  );
}

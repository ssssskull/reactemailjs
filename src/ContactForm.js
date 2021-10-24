import React from "react";
import emailjs from "emailjs-com";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  sendEmail(e) {
    console.log(e.target.elements);
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_0yn1mie",
        e.target,
        "user_OLFFe2N6LPD4d7xkEbbaz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  render() {
    return (
      <form
        className="flex flex-col items-start"
        onSubmit={(e) => this.sendEmail(e)}
      >
        <label className="mb-6 text-black-800 text-xl" for="first_name">
          Name*
        </label>
        <input
          className="transition focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent mb-8 p-4 border rounded-lg border-gray-200 w-full"
          id="first_name"
          type="text"
          name="first_name"
          placeholder="Skriv dit fulde navn"
        />
        <label className="mb-6 text-black-800 text-xl" for="get_email">
          E-mail*
        </label>
        <input
          className="transition focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent mb-8 p-4 border rounded-lg border-gray-200 w-full"
          id="get_email"
          type="email"
          name="get_email"
          placeholder="mitbureau@mail.dk"
        />
        <label className="mb-6 text-black-800 text-xl" for="phone_number">
          Telefon*
        </label>
        <input
          className="transition focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent mb-8 p-4 border rounded-lg border-gray-200 w-full"
          id="phone_number"
          type="tel"
          name="phone_number"
          placeholder="Eks. 25252525*"
        />
        <label className="mb-6 text-black-800 text-xl" for="service_needed">
          Vælg service*
        </label>
        <select
          className="transition focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent mb-8 p-4 border rounded-lg border-gray-200 w-full"
          value={this.state.value}
          onChange={this.handleChange}
          id="service_needed"
          name="service_needed"
        >
          <option value="Online marketing" name="Online marketing">
            Online marketing
          </option>
          <option value="Webdesign & udvikling" name="Webdesign & udvikling">
            Webdesign & udvikling
          </option>
          <option
            value="Grafisk eller videoproduktion"
            name="Grafisk eller videoproduktion"
          >
            Grafisk eller videoproduktion
          </option>
          <option value="Kommunikation eller PR" name="Kommunikation eller PR">
            Kommunikation eller PR
          </option>
          <option
            value="Workshop, kurser eller undervisning"
            name="Workshop, kurser eller undervisning"
          >
            Workshop, kurser eller undervisning
          </option>
          <option value="Andet" name="Andet">
            Andet
          </option>
        </select>
        <label className="mb-6 text-black-800 text-xl" for="your_challenge">
          Opgavebeskrivelse*
        </label>
        <textarea
          className="transition focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent mb-8 pt-4 pl-4 pr-4 pb-12 border rounded-lg border-gray-200 w-full"
          id="your_challenge"
          name="your_challenge"
          placeholder="Giv en kort beskrivelse af din opgave"
        />
        <button
          className="transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-100 mb-6 bg-green-500 text-black-800 text-xl pl-12 pr-12 pt-4 pb-4 text-white rounded-xl"
          type="submit"
        >
          Få 3 tilbud - gratis & uforpligtende
        </button>
        <p className="text-gray-500 text-sm text-left">
          Jeg accepterer FindBureau.dk’s privatlivspolitik & servicevilkår.
        </p>
      </form>
    );
  }
}

export default ContactForm;

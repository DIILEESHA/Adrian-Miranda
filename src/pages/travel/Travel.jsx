import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const travelInfo = [
  {
    question:
      "How soon can I purchase plane tickets, which airport should I fly into, and what is the estimated cost?",
    answer: (
      <>
        Airfare to Bali, Indonesia can typically be booked 12–13 months in
        advance. Ticket prices generally range from{" "}
        <strong>$1,000–$1,800 USD</strong>, depending on the departure city and
        time of booking.
        <br />
        <br />
        Guests should fly into{" "}
        <strong>Gusti Ngurah Rai International Airport (DPS)</strong>, also
        known as Denpasar International Airport.
      </>
    ),
  },

  {
    question: "What are the passport requirements for traveling to Indonesia?",
    answer: (
      <>
        Please ensure that your passport is valid for at least
        <strong> 6 months beyond your return date</strong> from Indonesia, as
        this is required for international travel.
        <br />
        <br />
        We strongly recommend checking your passport expiration date early to
        avoid any travel complications.
        <br />
        <br />
        For U.S. passport holders, an appointment is required for renewal or
        application, and processing can take several weeks.
        <br />
        <br />
        Official website: travel.state.gov
      </>
    ),
  },

  {
    question: "Is there a Visa requirement for Indonesia?",
    answer: (
      <>
        Most guests traveling to Indonesia can obtain a
        <strong> Visa on Arrival (VOA)</strong> when they land at
        <strong> Denpasar International Airport</strong>.
        <br />
        <br />
        The VOA is typically valid for <strong>30 days</strong> and can be
        extended once for an additional <strong>30 days</strong>.
        <br />
        <br />
        The current cost is approximately{" "}
        <strong>IDR 500,000 (~$35 USD)</strong>. Payment is usually accepted by
        credit card or cash.
        <br />
        <br />
        Apply here:
        <br />
        https://evisa.imigrasi.go.id/
        <br />
        <br />
        Visa requirements may vary depending on nationality, so please confirm
        with your local Indonesian consulate or the official immigration website
        before traveling.
      </>
    ),
  },
];

const Travel = () => {
  return (
    <div className="it">
      <div className="couple_name">
        <h2 className="couple_solo">
          <span className="first_charcter">T</span>ravel Info
        </h2>
      </div>

      <div className="accordin_space">
        <Accordion
          className="maina"
          type="single"
          collapsible
          defaultValue="item-0"
        >
          {travelInfo.map((item, index) => (
            <AccordionItem className="acco" key={index} value={`item-${index}`}>
              <AccordionTrigger className="trigger">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="fker">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Travel;

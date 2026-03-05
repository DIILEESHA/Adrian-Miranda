import "./fa.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const faqs = [
  {
    question: "Can I bring a +1?",
    answer: (
      <>
        At this time, any +1 have been determined by Adrian and Miranda, and you
        have been informed directly if you have been granted the option to bring
        a guest. Once the formal invitations have been sent, additional +1 may
        be considered on a case-by-case basis.
        <br />
        <br />
        As this is an international destination wedding in Bali, Indonesia, we
        warmly encourage you to invite friends or family to join you in
        experiencing the beauty of the island. While they will not be able to
        attend the wedding ceremony or reception, they are most welcome to enjoy
        all that Bali has to offer.
      </>
    ),
  },

  {
    question:
      "When will formal invitations be sent, and why are they being sent so early?",
    answer:
      "Formal invitations will be sent in early 2026. Adrian and Miranda are eager to extend their invitations to additional friends, who likewise deserve the courtesy of timely notification—particularly given the destination nature of this wedding.",
  },

  {
    question: "Will there be children?",
    answer: (
      <>
        Yes, a select number of children, ranging from infants to school age,
        will be present at the wedding.
        <br />
        <br />
        Please note that the music selection will not be tailored for younger
        audiences and WILL include explicit content. If your children have been
        invited, kindly be aware of this when planning their attendance.
      </>
    ),
  },
  {
    question: "Why is the wedding planned so far in advance?",
    answer: (
      <>
        We wish for all of our invited guests to be able to attend and celebrate
        with us. Given that traveling to Indonesia requires significant time and
        planning, we want to ensure our friends and family have ample
        opportunity to save, prepare, and make arrangements for the wedding.
      </>
    ),
  },

  {
    question:
      "How soon can I purchase plane tickets, which airport should I fly into, and what is the estimated cost?",
    answer: (
      <>
        Airfare to Bali, Indonesia can typically be booked 12-13 months in
        advance. Ticket prices generally range from $1,000-$1,800 USD, depending
        on the departure city and time of booking.
        <br />
        <br />
        Guests should fly into Gusti Ngurah Rai International Airport (DPS),
        also known as Denpasar International Airport.
      </>
    ),
  },
  {
    question: "What are the passport requirements for traveling to Indonesia?",
    answer: (
      <>
        Please ensure that your passport is valid for at least 6 months beyond
        your return date from Indonesia, as this is a requirement for
        international travel. We strongly recommend checking the expiration date
        on your passport as early as possible to avoid any travel complications.
        <br />
        <br />
        All guests should follow the travel requirements specific to their
        country of citizenship. For U.S. passport holders, an appointment is
        required for renewal or application, and processing can take several
        weeks.
        <br />
        <br />
        To verify requirements and begin the process, please visit the official
        U.S. passport website: travel.state.gov
      </>
    ),
  },
  {
    question:
      "What is the RSVP deadline, and does responding early assist with planning?",
    answer:
      "Kindly respond by May 1, 2026. Some guests are still awaiting formal invitations, and we want to provide them with at least a year’s notice so they can plan appropriately.",
  },
  {
    question: "What should I wear?",
    answer:
      "We are aiming for formal attire while keeping comfort in mind for a tropical setting. Think elegant, lightweight fabrics rather than heavy or restrictive clothing. While we love the idea of black-tie, it’s perfectly acceptable to opt for formal cocktail or dressy attire that’s breathable and suited to Bali’s warm climate.",
  },
];

const Faq = () => {
  return (
    <div className="it">
         <div className="couple_name">
          <h2 className="couple_solo">
            <span className="first_charcter">F</span>AQs
          </h2>
          
        </div>

      <div className="accordin_space">
        <Accordion className="maina"  type="single" collapsible defaultValue="item-0">
          {faqs.map((faq, index) => (
            <AccordionItem className="acco"  key={index} value={`item-${index}`}>
              <AccordionTrigger className="trigger">{faq.question}</AccordionTrigger>
              <AccordionContent className="fker">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;

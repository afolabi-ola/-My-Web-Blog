// import styled from 'styled-components';
import { useState } from 'react';
import List from './List';
import styled from 'styled-components';

const FAQs = [
  {
    question: 'What services do you offer?',
    answer: `We offer a variety of services, including web development, mobile app development, UI/UX design, and cloud solutions tailored to your business needs.`,
  },
  {
    question: 'How long does it take to build a website?',
    answer: `The duration to build a website varies based on complexity. A simple website may take 2-4 weeks, while larger projects could take several months.`,
  },
  {
    question: 'Can I update my website after it’s launched?',
    answer: `Yes! We provide an easy-to-use content management system (CMS), allowing you to make updates or request us to manage updates for you.`,
  },
  {
    question: 'Do you offer support and maintenance?',
    answer: `Absolutely! We offer ongoing support and maintenance plans to ensure your site stays updated and secure.`,
  },
  {
    question: 'How do I start a project with you?',
    answer: `Just contact us through our booking page or fill out our project request form. We'll get back to you for an initial consultation.`,
  },
  {
    question: 'What is your pricing structure?',
    answer: `Our pricing is tailored based on project scope and requirements. Contact us for a custom quote that fits your needs.`,
  },
  {
    question: 'What technologies do you work with?',
    answer: `We work with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, Python, and more depending on the project.`,
  },
  {
    question: 'Can you redesign my existing website?',
    answer: `Yes, we can give your existing website a fresh look while ensuring it remains user-friendly and functional.`,
  },
  {
    question: 'Do you offer SEO services?',
    answer: `Yes, we optimize websites to be search-engine friendly, helping you reach a broader audience organically.`,
  },
  {
    question: 'Can you integrate payment systems into my website?',
    answer: `We can integrate secure payment gateways like PayPal, Stripe, or custom solutions to suit your business requirements.`,
  },
  {
    question: 'How do I track my project’s progress?',
    answer: `You’ll have access to a project management dashboard where you can track the progress, share feedback, and communicate with our team.`,
  },
  {
    question: 'What is My Web Blog all about?',
    answer: `My Web Blog is a platform where you can find insightful articles, helpful resources, and engaging content on [topic/industry/niche]. We aim to inspire, inform, and connect with our audience through high-quality posts.`,
  },
  {
    question: 'How can I contribute to the blog?',
    answer: `We love hearing from our community! If you would like to contribute, you can reach out via our <strong>Contact</strong> page or email us directly. We welcome articles, stories, and insights from diverse voices.`,
  },
  {
    question: 'Is there a subscription or membership option?',
    answer: `Currently, our content is free to access! However, we offer a newsletter that you can subscribe to for the latest updates and exclusive content. Stay tuned for future membership perks!`,
  },
  {
    question: 'How often is new content published?',
    answer: `We update our blog regularly, with new posts published every week. Keep an eye on our homepage for the latest articles or subscribe to our newsletter for instant notifications.`,
  },
  {
    question: ' Can I share content from your blog?',
    answer: `Absolutely! We encourage you to share our content with your friends and community. Just make sure to give credit and link back to our website.`,
  },
];

// interface AccordionProps {
// }

/**
 *
 */
const Accordion = (): JSX.Element => {
  const [curOpen, setCurOpen] = useState<number | null>(null);
  return (
    <Wrapper>
      {FAQs.map((el, i) => (
        <List
          question={el.question}
          answer={el.answer}
          num={i}
          key={el.answer}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        />
      ))}
    </Wrapper>
  );
};

export default Accordion;

const Wrapper = styled.div`
  margin: 2rem 0;
  height: 80%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: #bbbbbb; /* Track color */
    /*background: #025975;  Track color */
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #025975; /* Thumb color */
    /*  background-color: deepskyblue; Thumb color */
    border-radius: 10px; /* Round corners of the thumb */
    /* border: 2px solid #eee; Padding around thumb */
  }
`;

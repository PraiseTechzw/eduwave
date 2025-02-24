"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do the interactive courses work?",
    answer:
      "Our courses combine video lectures, hands-on exercises, and real-time simulations. You'll have access to a code playground, interactive visualizations, and immediate feedback on your progress.",
  },
  {
    question: "Are the certificates recognized by employers?",
    answer:
      "Yes, our certificates are widely recognized. They're issued by CUT and verify your course completion, skills acquired, and practical project work.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "All courses are self-paced, allowing you to learn when it's convenient for you. You'll have lifetime access to the course materials.",
  },
  {
    question: "What support is available if I get stuck?",
    answer:
      "We offer multiple support channels including course forums, live chat with instructors, and a helpful community of fellow learners.",
  },
  {
    question: "How long does it take to complete a course?",
    answer:
      "Course duration varies depending on the subject and your pace. Most courses can be completed in 4-8 weeks with 5-10 hours of study per week.",
  },
]

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-2xl">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}


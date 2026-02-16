import Frequentlyaskedquestion from './home/frequentlyaskedquestion'
import Hero from './home/hero'
import HowItWorks from './home/howitworks'
import PopularCourses from './home/popularcourses'
import Testimonial from './home/testimonial'
import WhyChooseUs from './home/whychooseus'
import CTASection from '@/src/components/layouts/PrimaryCTA'

const page = () => {
  return (
    <div className="px-8 py-1">
      <Hero />
      <PopularCourses />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonial />
      <Frequentlyaskedquestion />
      <CTASection
        title="Access Premium Learning Resources"
        description="Master Node.js, React, and Flutter or excel in your A-Levels with our curated study materials, past papers, and project guides."
        primaryCta={{
          label: "View Course Materials",
          href: "/courses",
        }}
        trustText="Exam-focused prep · Industry-standard coding practices · 100% Practical"
      />
    </div>
  )
}

export default page
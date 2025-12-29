import Review from "./Review";

interface ReviewData {
  rating: number;
  title: string;
  content: string;
  author: string;
  designation: string;
}

interface ReviewsProps {
  reviews?: ReviewData[];
}

const defaultReviews: ReviewData[] = [
  {
    rating: 5,
    title: "Transformed Our Operations",
    content:
      "Futurive.ai's custom ML models revolutionized our predictive maintenance process. We've reduced downtime by 40% and saved millions in operational costs.",
    author: "Sarah Chen",
    designation: "CTO @ TechCorp Industries",
  },
  {
    rating: 5,
    title: "Exceptional AI Expertise",
    content:
      "The team at Futurive.ai provided top-tier AI consulting that helped us develop a comprehensive AI strategy. Their insights were invaluable for our digital transformation.",
    author: "Michael Rodriguez",
    designation: "VP of Innovation @ Global Finance",
  },
  {
    rating: 5,
    title: "Game-Changing Automation",
    content:
      "The AI automation solutions implemented by Futurive.ai streamlined our workflows beyond expectations. Our team can now focus on strategic initiatives instead of repetitive tasks.",
    author: "Jennifer Park",
    designation: "Operations Director @ RetailNext",
  },
  {
    rating: 5,
    title: "Outstanding Results & Support",
    content:
      "From initial consultation to deployment, Futurive.ai delivered excellence. Their AI integration seamlessly connected with our existing systems and delivered measurable ROI within months.",
    author: "David Thompson",
    designation: "CEO @ DataDrive Solutions",
  },
];

const Reviews: React.FC<ReviewsProps> = ({ reviews = defaultReviews }) => {
  return (
    <section className="section-muted overflow-x-hidden">
      <div className="container-content">
        <div className="section-header">
          <h2 className="section-title px-4">
            Trusted by Industry Leaders
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

import { FaStar } from "react-icons/fa";

interface ReviewProps {
  rating: number;
  title: string;
  content: string;
  author: string;
  designation: string;
}

const Review: React.FC<ReviewProps> = ({
  rating = 5,
  title = "Default Title",
  content = "Default content for the review.",
  author = "John Doe",
  designation = "Customer",
}) => {
  return (
    <div className="card card-padding">
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={`w-5 h-5 ${i < rating ? "text-purple-600 dark:text-purple-400" : "text-gray-300 dark:text-gray-700"}`} />
        ))}
      </div>
      <h3 className="heading-6 mb-3">{title}</h3>
      <p className="body-base text-gray-600 dark:text-gray-400 mb-4">{content}</p>
      <div className="flex items-center">
        <div>
          <p className="body-base font-semibold text-gray-900 dark:text-white">{author}</p>
          <p className="body-small text-gray-500 dark:text-gray-400">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;

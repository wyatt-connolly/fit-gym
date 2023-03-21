import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { faq } from "@/data/faq";

function FAQ() {
  return (
    <div className="mt-16">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 space-y-4">
        {faq.map((index) => (
          <div>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                <h2 className="font-medium text-gray-900">{index.question}</h2>
                <ChevronDownIcon className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180" />
              </summary>
              <p className="px-4 mt-4 leading-relaxed text-gray-700 whitespace-pre-wrap">
                {index.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;

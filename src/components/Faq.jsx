
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
function Faq() {
    const [showAns, setShowAns] = useState(null);

    const faqs = [
        {
            question: `Can I recover deleted files from desktop with this software?`,
            answer: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure vel aut numquam in consequatur esse dignissimos cumque reiciendis perspiciatis?`
        },
        {
            question: `Can I recover deleted files from desktop with this software?`,
            answer: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure vel aut numquam in consequatur esse dignissimos cumque reiciendis perspiciatis?` },
        {
            question: `Can I recover deleted files from desktop with this software?`,
            answer: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure vel aut numquam in consequatur esse dignissimos cumque reiciendis perspiciatis?`},
        {
            question: `Can I recover deleted files from desktop with this software?`,
            answer: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure vel aut numquam in consequatur esse dignissimos cumque reiciendis perspiciatis?` },
        {
            question: `Can I recover deleted files from desktop with this software?`,
            answer: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure vel aut numquam in consequatur esse dignissimos cumque reiciendis perspiciatis?` }
    ];

    const toggleAns = (id) => {
        setShowAns(showAns === id ? null : id);
    };

    return (
        <>
            <section className="faq">
                <div className="lg:container mx-auto px-5 py-5 mt-5">
                    <h3 className="text-small text-center font-normal text-[rgba(235,141,21,1)] mb-2">FAQ</h3>
                    <h1 className="text-3xl text-center font-bold text-[rgba(60,33,9,1)]">Frequent Ask Questions </h1>

                    <ul className="space-y-2">
                        {faqs.map((faq, i) => (

                            <li key={i} className="border-s-4  shadow-md rounded-lg p-2">
                                <div className="qsn flex flex-row items-center gap-2 justify-between p-2" onClick={() => toggleAns(i)}>
                                    <p>{faq.question}</p>
                                    <IoIosArrowForward />
                                </div>
                                {showAns === i && (
                                    <div className="ans p-2 text-orange-600">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}

                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Faq
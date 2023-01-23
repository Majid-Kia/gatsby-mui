
const testimonials = [
    {
        "id": 1,
        "comment": "I am not a tech person, so I wanted the most user-friendly VPS on the market that a five-year-old could use; Cloudzy offered me exactly that. Also, the control panel has a simple user interface; I can access it from all my devices.",
        "rating": 5,
        "writerInfo": { name: "Brandon Madden", avatarRelativePath: "testimonial-section/testimonial-png/Rectangle5026.png" }
    },
    {
        "id": 2,
        "comment": "I have tried many VPS services, but the same problem kept happening; their support staff was not up to the job. My highest expectation from a VPS provider was a support team that got back to me ASAP. Cloudzy fulfilled my wish like no other.",
        "rating": 5,
        "writerInfo": { name: "Destiny Kaiser", avatarRelativePath: "testimonial-section/testimonial-png/Rectangle5027.png" }
    },
    {
        "id": 4,
        "comment": "I had invested all my budget in starting my small business, but I knew I had to invest in reliable VPS to protect my data against cyber threats. I almost didn't believe Cloudzy offered VPS servers worldwide in more than 15 locations at THESE PRICES. Talk about a Jackpot!",
        "rating": 5,
        "writerInfo": { name: "Haven Hayes", avatarRelativePath: "testimonial-section/testimonial-png/Rectangle5029.png" }
    },
    {
        "id": 5,
        "comment": "I think VPS providers that offer money-back guarantees are the ones we can trust and definitely invest in. Cloudzy was so transparent about this from the start, and after I talked to their support team, I knew I had found the best VPS provider on the market.",
        "rating": 5,
        "writerInfo": { name: "Jenna Hartman", avatarRelativePath: "testimonial-section/testimonial-png/Rectangle5030.png" }
    },
];

export default class TestimonialData {
    static getTestimonialByListOfId(listOfIds) {
        return testimonials.filter(item => listOfIds.find(id => id === item.id))
    }
}
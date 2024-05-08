import MultipleRating from '/static/img/multiple-rating.svg';
import SingleRating from '/static/img/single-rating.svg';

const Rating = () => {

    const ratingCategories = [
        {
            id: 1,
            category: "Not at all",
            ratingNumbers: [0],
        },
        {
            id: 2,
            category: "Mildly",
            ratingNumbers: [1, 2, 3],
        },
        {
            id: 3,
            category: "Moderately",
            ratingNumbers: [4, 5, 6],
        },
        {
            id: 4,
            category: "Marketdly",
            ratingNumbers: [7, 8, 9],
        },
        {
            id: 5,
            category: "Extremely",
            ratingNumbers: [10],
        },
    ];

    function NumberList() {
        const numberGroups: any = {};
        ratingCategories.forEach((category) => {
            category.ratingNumbers.forEach((number) => {
                if (!numberGroups[category.category]) {
                    numberGroups[category.category] = [];
                }
                numberGroups[category.category].push(number);
            })
        })



        return (
            <div className='number-list d-flex align-items-center'>
                {Object.entries(numberGroups).map(([categoryName, numbers]: any) => (
                    <div className='number-group text-center' key={categoryName}>
                        <div className='category-name'>{categoryName}</div>
                        <div className='mob-w'>
                            <img
                                className='category-image'
                                src={`${numbers.length < 3 ? SingleRating : MultipleRating}`}
                                alt={`Category ${categoryName}`}
                            />
                        </div>
                        <div
                            className={`d-flex align-items-center justify-content-${numbers.length < 3 ? 'center w-60' : 'between'
                                } circles-main mt-1`}
                        >
                            {numbers.map((number: number) => (
                                <div
                                    className={`number d-flex align-items-center justify-content-center circle ${number === 0 ? 'active' : ''
                                        }`}
                                    key={number}
                                >
                                    {number}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    return (
        <div>
            <NumberList />
        </div>
    );
}

export default Rating
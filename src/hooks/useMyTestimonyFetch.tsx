import { useEffect, useState } from 'react';

const testimony = [
  {
    userQuote: 'Best financial decision ever!',
    quoteDesc:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.',
    userImg: './images/user-1.jpg',
    userName: 'Aarav Lynn',
    userLocation: 'San Francisco, USA',
  },
  {
    userQuote: 'The last step to becoming a complete minimalist',
    quoteDesc:
      'Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti.',
    userImg: 'images/user-2.jpg',
    userName: 'Miyah Miles',
    userLocation: 'London, UK',
  },
  {
    userQuote: 'Finally free from old-school banks',
    quoteDesc:
      'Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem, necessitatibus blanditiis modi similique quidem. Odio aliquam culpa dicta beatae quod maiores ipsa minus consequatur error sunt, deleniti saepe aliquid quos inventore sequi. Necessitatibus id alias reiciendis, perferendis facere.',
    userImg: 'images/user-3.jpg',
    userName: 'Francisco Gomes',
    userLocation: 'Lisbon, Portugal',
  },
];

function useMyTestimonyFetch() {
  const [myTestimony, setMyTestimony] = useState<
    {
      userQuote: string;
      quoteDesc: string;
      userName: string;
      userLocation: string;
      userImg: string;
    }[]
  >([]);
  const [isTestimonyLoading, setIsTestimonyLoading] = useState<boolean>(false);

  useEffect(function () {
    async function getData() {
      setIsTestimonyLoading(true);
      try {
        const res = await fetch('data/testimony.json');

        if (!res.ok) {
          throw new Error('could not get images');
        }
        const data = await res.json();

        setMyTestimony(data ? [...data.testimony] : [...testimony]);
        setIsTestimonyLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setIsTestimonyLoading(false);
      }
    }
    getData();
  }, []);

  return { myTestimony, isTestimonyLoading };
}

export default useMyTestimonyFetch;

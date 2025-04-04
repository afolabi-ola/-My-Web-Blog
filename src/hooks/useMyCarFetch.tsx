import { useEffect, useState } from 'react';

// const images = [
//   {
//     name: 'Image 1',
//     src: './images/img1.jpg',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa libero pariatur. Fugit sunt adipisci similique odio beatae nobis illum minima impedit expedita. Autem est, iste voluptatem fugit odit adipisci!',
//   },
//   {
//     name: 'Image 2',
//     src: 'images/img2.png',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa libero pariatur. Fugit sunt adipisci similique odio beatae nobis illum minima impedit expedita. Autem est, iste voluptatem fugit odit adipisci!',
//   },
//   {
//     name: 'Image 3',
//     src: 'images/img3.jpg',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa libero pariatur. Fugit sunt adipisci similique odio beatae nobis illum minima impedit expedita. Autem est, iste voluptatem fugit odit adipisci!',
//   },
//   {
//     name: 'Image 4',
//     src: 'images/img4.jpg',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa libero pariatur. Fugit sunt adipisci similique odio beatae nobis illum minima impedit expedita. Autem est, iste voluptatem fugit odit adipisci!',
//   },
//   {
//     name: 'Image 5',
//     src: 'images/img5.jpg',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa libero pariatur. Fugit sunt adipisci similique odio beatae nobis illum minima impedit expedita. Autem est, iste voluptatem fugit odit adipisci!',
//   },
//   {
//     name: 'Image 6',
//     src: 'images/img6.jpg',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa libero pariatur. Fugit sunt adipisci similique odio beatae nobis illum minima impedit expedita. Autem est, iste voluptatem fugit odit adipisci!',
//   },
// ];

function useMyCarFetch() {
  const [myImages, setMyImages] = useState<
    { name: string; src: string; desc: string }[]
  >([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(function () {
    async function data() {
      setIsloading(true);
      try {
        const res = await fetch('data/db.json');

        if (!res.ok) {
          throw new Error('could not get images');
        }
        const data = await res.json();
        console.log(data);

        setMyImages(data.images);
        setIsloading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setIsloading(false);
      }
    }
    data();
  }, []);

  return { myImages, isLoading };
}

export default useMyCarFetch;

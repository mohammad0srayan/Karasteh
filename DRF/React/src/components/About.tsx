import { useEffect, useState } from 'react';
import { getAboutUsData } from '../api/homeApi';
import { AboutUs } from '../api/types';

const About = () => {
  const [aboutData, setAboutData] = useState<AboutUs[]>([]);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await getAboutUsData();
        setAboutData(data);
      } catch (error) {
      }
    };
    fetchAboutData();
  }, []);

  return (
    <div className="border border-gray-500 p-4 rounded-lg my-10">
      <div className="flex flex-col items-center lg:flex-row lg:my-6 lg:gap-14">
        <div className="w-fit">
          {aboutData.length > 0 && (
            <>
              <h3 className="text-blue-900 lg:text-2xl text-xl font-bold mb-5">
                {aboutData[0].title || 'مجموعه کاراسته'}
              </h3>
              <div
                className="text-blue-900"
                dangerouslySetInnerHTML={{
                  __html: aboutData[0].description || 'توضیحاتی در دسترس نیست',
                }}
              />
            </>
          )}
        </div>
        <div className="grid grid-cols-2">
          {aboutData
            .filter(item => item.image || item.video)
            .map((item, index) => (
              <img
                key={index}
                src={(item.image || item.video) ?? undefined}
                alt="about"
                className="w-fit mt-10 cursor-pointer"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
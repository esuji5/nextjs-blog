// export default function Avatar({ name, picture }) {
//   return (
//     <div className="flex items-center">
//       {picture && (
//         <img
//           src={`${picture}?auto=format,compress,enhance&w=100&h=100`}
//           className="w-12 h-12 mr-4 rounded-full"
//           alt={name}
//         />
//       )}
//       <div className="text-xl font-bold">{name}</div>
//     </div>
//   );
// }

import Image from 'next/image';

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12">
      {picture && (
        <Image
          src={`${picture}?auto=format,compress,enhance&w=100&h=100`}
          width="100px"
          height="100px"
          className="w-12 h-12 mr-4 rounded-full"
          alt={name}
        />
      )}
      </div>
      <div className="text-xl font-bold">&nbsp;{name}</div>
    </div>
  );
}

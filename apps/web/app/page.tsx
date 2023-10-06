import Image from 'next/image'
import { trpc } from './trpc'
import Clientside from './Clientside';

export default async function Home() {
  const response = await trpc.hello.query({});
  return (
    <div>
      <p>Server Side - {response}</p>
      <Clientside />
    </div>
  );
}

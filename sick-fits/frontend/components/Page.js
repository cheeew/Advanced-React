import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <div>I am a global page!</div>
      <div>{children}</div>
    </div>
  );
}

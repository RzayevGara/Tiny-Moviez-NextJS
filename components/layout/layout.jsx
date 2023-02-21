import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";


export default function RootLayout({ children }) {
  return (
    <>
      <Sidebar />
      <main>
        <Header />
        {children}
      </main>
    </>
  );
}

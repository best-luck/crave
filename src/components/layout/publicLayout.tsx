import Footer from '@src/components/layout/footer';
import Header from '@src/components/layout/header';
import '@src/styles/globals.css';
import '@src/styles/fontawesome.css';
import { ToastContainer } from 'react-toastify';
import AgeRestrictModal from '@src/components/shared/common/UI/modals/AgeRestrict';

export const metadata = {
  title: 'Crave Cannabis',
  description:'Crave Cannabis'
};

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Header />
      {children}
      <Footer
      />
      <AgeRestrictModal />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

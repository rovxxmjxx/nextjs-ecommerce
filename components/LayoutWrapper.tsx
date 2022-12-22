import SectionContainer from './SectionContainer';
import GNB from './GNB';
import Footer from './Footer';
import { Children } from '@/constants/types';

const LayoutWrapper = ({ children }: Children) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <GNB />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;

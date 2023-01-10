import Sidebar from "./Sidebar/Sidebar";
import * as S from "./Styled";

const MainLayout = ({ children, title }) => {
  return (
    <S.MainLayout>
      <Sidebar />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.ContentInner>{children}</S.ContentInner>
      </S.Content>
    </S.MainLayout>
  );
};

export default MainLayout;

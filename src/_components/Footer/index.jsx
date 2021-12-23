import styled from 'styled-components';


const Footer = () => {
  return (
      <FooterContainer>
        <FooterText className="footer-text">Copyright 2020 Argent Bank</FooterText>
      </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;`;

const FooterText = styled.p`
  margin: 0;
  padding: 0;`;

export default Footer;
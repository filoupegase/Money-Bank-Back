import { Button } from '../Button';
import styled from 'styled-components';
import { colorStyle } from '../../utils/style/ColorStyle';


function AccountCard({ accountName, amount, balanceType }) {
  return (
      <AccountCardContainer>
        <div>
          <h3>Argent Bank { accountName }</h3>
          <Amount>${ amount }</Amount>
          <p>{ balanceType } Balance</p>
        </div>
        <div>
          <Button type="button" text="View transations" />
        </div>
      </AccountCardContainer>
  );
}

const AccountCardContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto 2rem auto;
  padding: 1.5rem;
  border-radius: 0.25rem;
  text-align: left;
  background: white;
  h3 {
    color: ${ colorStyle.neutral900 } !important;
    margin: 0 0 0.125rem 0 !important;
    font-size: 2rem !important;
    font-weight: 400 !important;
  }
  p {
    margin: 0;
    line-height: initial;
  }
`;

const Amount = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
`;

export default AccountCard;
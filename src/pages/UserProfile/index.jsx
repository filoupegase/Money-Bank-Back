import React from 'react';
import styled from 'styled-components';
import { Button } from '../../_components/Button';
import AccountCard from '../../_components/AccountCard';
import { colorStyle } from '../../utils/style/ColorStyle';


const USER_TRANSACTIONS_DATA = [
  {
    accountName: 'Checking (x8349)',
    amount: 2082.79,
    balanceType: 'Available'
  },
  {
    accountName: 'Savings (x6712)',
    amount: 10928.42,
    balanceType: 'Available'
  },
  {
    accountName: 'Credit Card (x8349)',
    amount: 184.3,
    balanceType: 'Current'
  }
];

function UserProfile() {
  return (
      <>
        <UserProfileMain>
          <UserProfileContainer>
            <h2>Welcome back</h2>
            <EditContainer>
              <h3>Tony Jarvis!</h3>
              <Button
                  className="btn--edit"
                  type="button"
                  text="Edit Name"
                  center={ true }
                  /*handleClick={toggleEditionMode}*/
              />
            </EditContainer>
            <h2 className="sr-only">Accounts</h2>
            { USER_TRANSACTIONS_DATA.map(({ accountName, amount, balanceType }, idx) => (
                <AccountCard
                    key={ `account-card-${ idx }` }
                    accountName={ accountName }
                    amount={ amount }
                    balanceType={ balanceType }
                />)
            ) }
          </UserProfileContainer>
        </UserProfileMain>
      </>
  );
}

const UserProfileMain = styled.main`
  padding: 2rem 3rem;
  background: ${ colorStyle.secondary.main };
  h2,
  h3 {
    margin: 0;
    color: white;
    font-size: 2rem;
    font-weight: 700;
  }
  h3 {
    margin: 0 0 1.5rem 0;
  }
  article button {
    margin: 1.5rem auto;}`;

const UserProfileContainer = styled.div`${ colorStyle.largeWrapper }`;

const EditContainer = styled.div`
  margin: 0 0 2.5rem 0;
  .btn--edit {
    margin: auto;
  }`;

export default UserProfile;
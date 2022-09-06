import { createContext, useContext, useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

export const GlobalContextData = createContext();

export default function GlobalContext({ children }) {
  const [loanData, setLoanData] = useState([]);
  faker.setLocale('en_NG');

  useEffect(() => {
    let newData = [];
    for (let index = 0; index <= 50; index++) {
      let interest = faker.datatype.float({
        min: 0.1,
        max: 0.3,
        precision: 0.01,
      });
      let collected = faker.datatype.number({
        min: 100000,
        max: 1000000,
        precision: 0.01,
      });
      let status = faker.helpers.arrayElement([
        'Confirmed',
        'Pending',
        'Rejected',
      ]);
      let timeline;
      if (status === 'Confirmed') {
        timeline = faker.date.between('2023-01-01', '2024-01-01');
      }
      let gender = faker.helpers.arrayElement(['Female', 'Male']);
      // let paid = (collected * 0.6).toFixed(2)
      newData.push({
        id: index,
        fullName: faker.name.fullName(),
        loanAmount: collected,
        expectedAmount: parseFloat((collected * (1 + interest)).toFixed(2)),
        // gender: faker.name.sex(),
        gender: gender,
        reason: faker.helpers.arrayElement([
          'Rent',
          'School Fees',
          'Utilities',
          'Groceries',
          'Medicals',
          'Business',
          'Others',
        ]),
        timeline: timeline,
        interest: interest,
        // expectedAmount: parseFloat((collected * 0.6).toFixed(2)),
        // amountLeft: parseFloat((collected * 0.4).toFixed(2)),
        // nextDueAmount: parseFloat((collected * 0.1).toFixed(2)),
        avatar: faker.image.avatar(),
        status: status,
      });
    }
    newData.sort((a, b) => b.id - a.id);
    setLoanData(newData);
  }, []);

  return (
    <GlobalContextData.Provider value={{ loanData, setLoanData }}>
      {children}
    </GlobalContextData.Provider>
  );
}

export const useContextData = () => useContext(GlobalContextData);

"use client";

import { useState } from "react";
import {
  block,
  blockContent,
  blockCopyButton,
  blockRow,
  blockTitle,
  container,
  description,
} from "./accounts.css";
import SectionTitle from "./section-title";
import { ArrowDownIcon } from "./svgs";

const mAccounts: Account[] = [
  {
    bank: "카카오뱅크",
    number: "3333036420106",
    name: "김제희",
  },
  {
    bank: "농협",
    number: "0321701319011",
    name: "김영종",
  },
  {
    bank: "농협",
    number: "97702201670",
    name: "조경아",
  },
];

const bAccounts: Account[] = [
  {
    bank: "신한",
    number: "110376896450",
    name: "김다니엘",
  },
  {
    bank: "우리",
    number: "1002232350263",
    name: "김원주",
  },
  {
    bank: "신한",
    number: "110220131906",
    name: "현한나",
  },
];

export default function Accounts() {
  return (
    <section className={container}>
      <SectionTitle title="마음 전하실 곳" />
      <p className={description}>
        <span>참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다.</span>
        <span> 너그러운 마음으로 양해 부탁드리며,</span>
        <span>축의금을 보내주신 분들께 감사의 뜻을 전하고 싶습니다.</span>
        <span>연락주시면 감사하겠습니다.</span>
      </p>
      <Block accounts={mAccounts} who="신부" />
      <Block accounts={bAccounts} who="신랑" />
    </section>
  );
}

interface Account {
  bank: string;
  number: string;
  name: string;
}

function Block({ accounts, who }: { accounts: Account[]; who: string }) {
  const [open, setOpen] = useState(false);

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickAccount = ({ bank, number, name }: Account) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(number).then(() => {
        alert("계좌번호가 복사되었습니다.");
      });
    } else {
      window.prompt("계좌번호를 복사해 주세요.", number);
    }
  };

  return (
    <div className={block}>
      <div className={blockTitle} onClick={onClickOpen}>
        <span>{who}측 계좌번호</span>
        <ArrowDownIcon />
      </div>
      {open && (
        <>
          {accounts.map((account) => (
            <div key={account.number} className={blockRow}>
              <div className={blockContent}>
                <span>{account.bank}</span>
                <span>{account.number}</span>
                <b>{account.name}</b>
              </div>
              <button
                className={blockCopyButton}
                onClick={() => onClickAccount(account)}
              >
                복사
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
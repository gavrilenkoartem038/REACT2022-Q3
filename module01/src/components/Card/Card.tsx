import React from 'react';

import Modal from 'components/Modal/Modal';
import { ICard } from 'types/types';

import './Card.css';

interface Props {
  card: ICard;
}

interface State {
  active: boolean;
}

class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      active: false,
    };
    this.setActive = this.setActive.bind(this);
  }

  setActive(isActive: boolean) {
    this.setState({ active: isActive });
  }

  render() {
    const { card } = this.props;
    const { name, image } = card;
    const { active } = this.state;
    return (
      <>
        <div
          className="card flex flex-col p-4 gap-4 border-2 rounded-lg border-slate-300 bg-white"
          onClick={() => this.setActive(true)}
          aria-hidden="true"
          data-testid="card"
        >
          <img src={image} alt={name} className="rounded-lg" />
          <div className="self-center text-lg font-bold">{name}</div>
        </div>
        <Modal active={active} setActive={this.setActive} card={card} />
      </>
    );
  }
}

export default Card;

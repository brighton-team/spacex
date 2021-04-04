import React, { Component, PropsWithChildren } from 'react';

import { ErrorPage5XX } from 'pages/Error';

import { ErrorMsgWrapper } from './styledItems';

type Props = {
  type: 'global' | 'local';
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error): void {
    if (error) {
      this.setState({
        hasError: true,
      });
    }
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { children, type } = this.props;

    if (hasError) {
      if (type === 'local') {
        return (
          <ErrorMsgWrapper>
            <h2>Упс! Что-то пошло не так.</h2>
          </ErrorMsgWrapper>
        );
      }

      return <ErrorPage5XX number="Упс, ошибка!" errorSize="small" />;
    }

    return children;
  }
}

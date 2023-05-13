import React, { useCallback, useState } from 'react';

import Button from '@atlaskit/button/standard-button';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import { N500 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';

import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from '@atlaskit/modal-dialog';

export default function Example({user, shortlistEmployee}) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <div>
      <Button appearance="primary" onClick={openModal}>
        More Details
      </Button>

      <ModalTransition>
        {isOpen && (
          <Modal houldScrollInViewport='true' onClose={closeModal}>
            <ModalHeader>
              <ModalTitle>Employee Details</ModalTitle>
              <Button appearance="link" onClick={closeModal}>
                <CrossIcon
                  label="Close Modal"
                  primaryColor={token('color.text.subtle', N500)}
                />
              </Button>
            </ModalHeader>
            <ModalBody>
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.company.name}</p>
                <p>{user.email}</p>
                <p>{user.address.address}</p>
                <p>{user.birthDate}</p>
                <p>{user.eyeColor}</p>
                <p>{user.gender}</p>
                <p>{user.height}</p>
                <p>{user.username}</p>

            </ModalBody>
            <ModalFooter>
              <Button  onClick={() => shortlistEmployee(user)  } appearance="subtle">Shortlist</Button>
              <Button appearance="primary" onClick={closeModal} autoFocus>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
    </div>
  );
}
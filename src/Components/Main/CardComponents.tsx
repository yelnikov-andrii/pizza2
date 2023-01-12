import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

interface Props {
  components: string;
}

export const CardComponents: React.FC <Props> = ({components}) => {
  return (
    <>
        <OverlayTrigger
          trigger="click"
          placement='bottom-start'
          overlay={
            <Popover>
              <Popover.Header as="h3"></Popover.Header>
              <Popover.Body 
                className="pizza__components">
                <strong>Склад:</strong> {components}
              </Popover.Body>
            </Popover>
          }
        >
          <Button 
            variant="outline-secondary" 
            style={{margin: '0 0 20px 0'}}>
              Склад
          </Button>
        </OverlayTrigger>
    </>
  );
};
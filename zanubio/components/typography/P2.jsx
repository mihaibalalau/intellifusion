import classlist from 'zanubio/utils/classlist';

const P2 = ({ className, ...props }) => {
    return (
        <p {...props} className={classlist(className, 'p2')}>

        </p>
    );
}

export default P2;

import classlist from 'zanubio/utils/classlist';

const P1 = ({ className, ...props }) => {
    return (
        <p {...props} className={classlist(className, 'p1')}>

        </p>
    );
}

export default P1;

import classlist from "zanubio/utils/classlist";

const H4 = ({ className, ...props }) => {
    return (
        <h4 {...props} className={classlist(className, 'h4')}>

        </h4>
    );
}

export default H4;

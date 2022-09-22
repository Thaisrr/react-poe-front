import '../style/Error.css';

const Error = ({children, color = 'error'}) => (
    <div id="Error" className={color}>
        {children}
    </div>
);

export default Error;
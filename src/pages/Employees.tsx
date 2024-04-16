import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import EmployeeData from './EmployeeData';


const Employees = () => {
  
    return (
        <DefaultLayout>
        <Breadcrumb pageName="Employees" />

            <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                {/* <div className="relative z-20 h-35 md:h-65">  */}

                    <div className="flex w-full">     
                        <div className="flex-1"> {/* Equivalent to flex: 6 but more commonly flex-1 is used for the main content area */}
                        
                            <EmployeeData />
                            {/* <Navbar/> */}
                            {/* <Datatable/> */}
                        </div>
                    </div>

                {/* {/* </div> */}
            </div>
        </DefaultLayout>
    );
};

export default Employees;

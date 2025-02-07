import React from "react";
 import Saidebar from '../components/Saidebar'
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Usermanage from "../components/superadmin/Usermanage";
import Form from "../components/Form";
import Adduser from "../components/user/Adduser";
import Formsdata from "../components/Formsdata";

function Dashboard() {
  const { url } = useParams();
  const { val } = useParams();
  console.log(val,"dcdc");
  console.log(url,"3456");

  const role =
    val === "user"
      ? "user"
      : val === "admin"
      ? "admin"
      : val === "superadmin"
      ? "superadmin"
      : "null";

 
      const demo = [
        {
          id: 1,
          value: [
            {
              value:"Dashboard",
              icon: "user",
              url: "dashboard",
            },
            {
              value: "User Management",
              icon: "user",
              url: "adminmanagement",
              data: [
                { value: "addUser", url: "adduser" },
                { value: "update ", icon: "user", url: "update" },
                { value: "view ", icon: "user", url: "viewall" },
              ],
            },
            {
              value: "Global Policy Configuration",
              icon: "user",
              url: "gloabalpolicyconfiguration",
              data: [
                { value: "Add ", icon: "user", url: "employeemangement" },
                { value: "View ", icon: "user", url: "AttendanceAndLeave" },
                { value: "Product ", icon: "user", url: "jobopenings" },
              ],
            },
            {
              value: "Analytics & Reporting",
              icon: "user",
              url: "analyticsandreporting",
              data: [
                { value: "Add ", icon: "user", url: "employeemangement" },
                { value: "View ", icon: "user", url: "AttendanceAndLeave" },
                { value: "Product ", icon: "user", url: "jobopenings" },
              ],
            },
            {
              value: "Audit Logs",
              icon: "user",
              url: "auditlogs",
              data: [
                { value: "Add ", icon: "user", url: "employeemangement" },
                { value: "View ", icon: "user", url: "AttendanceAndLeave" },
                { value: "Product ", icon: "user", url: "jobopenings" },
              ],
            },
          ],
          role: "superadmin",
        },
        {
          id: 2,
          value: [
            {
              value:"Dashboard",
              icon: "user",
              url: "dashboard",
            },
            {
              value: "Branch Management",
              icon: "user",
              url: "branchmanagement",
              data: [
                { value: "Add ", icon: "user", url: "employeemangement" },
                { value: "View ", icon: "user", url: "AttendanceAndLeave" },
                { value: "Product ", icon: "user", url: "jobopenings" },
              ],
            },
            {
              value: "Employee Management",
              icon: "user",
              url: "employeemanagement",
              data: [
                { value: "Add ", icon: "user", url: "employeemangement" },
                { value: "View ", icon: "user", url: "AttendanceAndLeave" },
                { value: "Product ", icon: "user", url: "jobopenings" },
              ],
            },
            {
              value: "Operational Oversight",
              icon: "user",
              url: "operationaloversight",
              data: [
                { value: "Add ", icon: "user", url: "employeemangement" },
                { value: "View ", icon: "user", url: "AttendanceAndLeave" },
                { value: "Product ", icon: "user", url: "jobopenings" },
              ],
            },
            {
              value: "Reporting & Audits",
              icon: "user",
              url: "reportingandaudits",
              data: [
                { value: "Add ", icon: "user", url: "employeemangement" },
                { value: "View ", icon: "user", url: "AttendanceAndLeave" },
                { value: "Product ", icon: "user", url: "jobopenings" },
              ],
            },
          ],
          role: "admin",
        },
        {
          id: 3,
          value: [
            {
              value:"Dashboard",
              icon: "user",
              url: "dashboard",
            },
            {
              value: "Recruitment",
              icon: "user",
              url: "recruitment",
              data: [
                { value: "Job Openings ", icon: "user", url: "jobopenings" },
                { value: "Employee ", icon: "user", url: "employeemanagement" },
                { value: "Job ", icon: "user", url: "jobopenings" },
              ],
            },
            {
              value: "Employee Onboarding",
              icon: "user",
              url: "employeeonboarding",
              data: [
                { value: "View ", icon: "user", url: "employeemanagementf" },
                { value: "Add employees ", icon: "user", url: "employeemanagement" },
                { value: "Product ", icon: "user", url: "jobopenings" },
              ],
            },
            {
              value: "Payroll Management",
              icon: "user",
              url: "payrollmanagement",
              data: [
                { value: "Attendance ", icon: "user", url: "attendanceandemployee" },
                { value: "View ", icon: "user", url: "AttendanceAndLeave" },
                { value: "Product ", icon: "user", url: "jobopenings" },
              ],
            },
            {
              value: "Attendance & Leave Tracking",
              icon: "user",
              url: "attendanceandleavetracking",
              data: [
                { value: "Attendance ", icon: "user", url: "attdancelist" },
                { value: "Approve Leaves ", icon: "user", url: "attendanceemployee" },
                { value: "Product ", icon: "user", url: "jobopenings" },
              ],
            },
          ],
          role: "hr",
        },
        {
          id: 4,
          value: [
            {
              value:"Dashboard",
              icon: "user",
              url: "dashboard",
            },
            {
              value: "user_managementr",
              icon: "user",
              url: "admincreate",
              data: [
                { value: "Add ", icon: "user", url: "employeemangement" },
                { value: "View ", icon: "user", url: "AttendanceAndLeave" },
                { value: "Product ", icon: "user", url: "jobopenings" },
              ],
            },
            {
              value: "user",
              icon: "user",
              url: "AttendanceAndLeav",
              data: [
                { value: "Add ", icon: "user", url: "attdancelist" },
                { value: "View ", icon: "user", url: "AttendanceAndLeave" },
                { value: "Product ", icon: "user", url: "jobopenings" },
              ],
            },
          ],
          role: "user",
        },
      ];
    
  return (
    <div className="flex w-full">
      <div>
        <Saidebar role={role} demo={demo} val={val}/>
        {/* <Sai } /> */}
      </div>
     <div className=" grid grid-cols-1">
     <div className="w-full">
        <Header />
      </div>
      <div className="">

        {  val==="superadmin"?
        (
          <div style={{ width: "100%" }}>
            {url === "adduser" && < Formsdata/>}
          </div>
        ) : val === "admin" ? (
          <div style={{ width: "100%" }}>
            {url === "addadmin" && <Add_admine />}
          </div>
        ) : val === "user" ? (
          <div style={{ width: "100%" }}>
            {url === "admincreate" && <Add_admine />}
          </div>
        )

        
        :val === "dashboard" && (
          <div style={{ width: "100%" }}>{url === "admin" && <Usermanage />}</div>
        )}
      </div>
     </div>
    </div>
  );
}

export default Dashboard;

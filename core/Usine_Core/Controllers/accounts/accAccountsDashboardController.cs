using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Usine_Core.Controllers.Admin;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;



namespace Usine_Core.Controllers.Accounts
{
    public class IAccDashDetails
    {
        public int? sno { get; set; }
        public String descr { get; set; }
        public double? fir { get; set; }
        public double? sec { get; set; }

    }
    public class DashBoardDetails
    {
        public int? sno { get; set; }
        public string descr { get; set; }
        public double? fir { get; set; }
        public double? sec { get; set; }
        public int? typ { get; set; }
    }
    public class accAccountsDashboardController : ControllerBase
    {
        AdminControl ac = new AdminControl();
        [HttpPost]
        [Authorize]
        [Route("api/accounts/getIAccountsDashboard")]
        public List<IAccDashDetails> getIAccountsDashboard([FromBody] UserInfo usr)
        {
            AdminControl ac = new AdminControl();
            DateTime dat2 = ac.getPresentDateTime();
            DateTime dat1 = ac.getFinancialStart(dat2, usr);
            List<IAccDashDetails> details = new List<IAccDashDetails>();
            String quer = "";
            quer = quer + " select * from";
            quer = quer + " (select 1 sno, 'PNL' descr, case when sum(cre) is null then 0 else sum(cre) end  fir, case when sum(deb) is null then 0 else sum(deb) end  sec from finexecdet where recordId in (select recordID from finexecuni where dat >= '" + ac.strDate(dat1) + "' and dat <= '" + ac.strDate(dat2) + "' and accname in (select recordID from finaccounts where customerCode = " + usr.cCode.ToString() + " and accgroup in (select recordID from finaccgroups where (grptag like 'c%' or grptag like 'd%') and customerCode =  " + usr.cCode.ToString() + "))) and customerCode =  " + usr.cCode.ToString() + "";
            quer = quer + " union all";
            quer = quer + " select 2 sno,'CASH' descr, case when sum(deb) is null then 0 else sum(deb) end fir,case when sum(cre) is null then 0 else sum(cre) end sec from finexecDet where recordID in";
            quer = quer + " (select recordId from finexecuni where dat >= '" + ac.strDate(dat1) + "' and dat <= '" + ac.strDate(dat2) + "' and accname in (select recordId from finAccounts where acType = 'CAS' and customerCode =  " + usr.cCode.ToString() + ") and customerCode =  " + usr.cCode.ToString() + ") and customerCode =  " + usr.cCode.ToString() + "";
            quer = quer + " union all";
            quer = quer + " select 3 sno,'BANK' descr, case when sum(deb) is null then 0 else sum(deb) end fir,case when sum(cre) is null then 0 else sum(cre) end sec from finexecDet where recordID in";
            quer = quer + " (select recordId from finexecuni where dat >= '" + ac.strDate(dat1) + "' and dat <= '" + ac.strDate(dat2) + "' and accname in (select recordId from finAccounts where acType = 'BAN' and customerCode =  " + usr.cCode.ToString() + ") and customerCode =  " + usr.cCode.ToString() + ") and customerCode =  " + usr.cCode.ToString() + "";
            quer = quer + " union all";
            quer = quer + " select 4 sno,'M_WALLET' descr, case when sum(deb) is null then 0 else sum(deb) end fir,case when sum(cre) is null then 0 else sum(cre) end sec from finexecDet where recordID in";
            quer = quer + " (select recordId from finexecuni where dat >= '" + ac.strDate(dat1) + "' and dat <= '" + ac.strDate(dat2) + "' and accname in (select recordId from finAccounts where acType = 'MOB' and customerCode =  " + usr.cCode.ToString() + ") and customerCode =  " + usr.cCode.ToString() + ") and customerCode =  " + usr.cCode.ToString() + "";
            quer = quer + " union all";
            quer = quer + " select 5 sno,'SUP' descr, case when sum(cre) is null then 0 else sum(cre) end fir,case when sum(deb) is null then 0 else sum(deb) end sec from finexecDet where recordID in";
            quer = quer + " (select recordId from finexecuni where dat >= '" + ac.strDate(dat1) + "' and dat <= '" + ac.strDate(dat2) + "' and accname in (select recordId from finAccounts where acType = 'SUP' and customerCode =  " + usr.cCode.ToString() + ") and customerCode =  " + usr.cCode.ToString() + ") and customerCode =  " + usr.cCode.ToString() + "";
            quer = quer + " union all";
            quer = quer + " select 6 sno,'CUS' descr, case when sum(deb) is null then 0 else sum(deb) end fir,case when sum(cre) is null then 0 else sum(cre) end sec from finexecDet where recordID in";
            quer = quer + " (select recordId from finexecuni where dat >= '" + ac.strDate(dat1) + "' and dat <= '" + ac.strDate(dat2) + "' and accname in (select recordId from finAccounts where acType = 'CUS' and customerCode =  " + usr.cCode.ToString() + ") and customerCode =  " + usr.cCode.ToString() + ") and customerCode =  " + usr.cCode.ToString() + "";
            quer = quer + " union all";
            quer = quer + " select 7 sno,'A S R OPTICIANS-KPHB' descr,121629.00 fir,20 sec)x order by sno, fir desc";

            DataBaseContext g = new DataBaseContext();
            SqlCommand dc = new SqlCommand();
            dc.Connection = g.db;
            g.db.Open();
            dc.CommandText = quer;
            SqlDataReader dr = dc.ExecuteReader();
            while (dr.Read())
            {
                details.Add(new IAccDashDetails
                {
                    sno = int.Parse(dr[0].ToString()),
                    descr = dr[1].ToString(),
                    fir = double.Parse(dr[2].ToString()),
                    sec = double.Parse(dr[3].ToString())

                });
            }
            dr.Close();
            g.db.Close();

            return details;
        }

        [HttpPost]
        [Authorize]
        [Route("api/accounts/GetDashBoardDetails")]
        public List<DashBoardDetails> GetDashBoardDetails([FromBody] UserInfo usr)
        {
            List<DashBoardDetails> list = new List<DashBoardDetails>();
            string dat1 = ac.strDate( ac.getFinancialStart(DateTime.Now, usr));
            string dat2 = ac.strDate(DateTime.Parse(dat1).AddYears(1));

            var headers = getIAccountsDashboard(usr).ToList();
            foreach (var header in headers)
            {
                list.Add(new DashBoardDetails
                {
                    sno = header.sno,
                    descr = header.descr,
                    fir = header.fir,
                    sec = header.sec,
                    typ = 1
                });
            }
            string quer = "";

            quer = "select right(dbo.strdate(dat),6) dats, sum(deb),sum(cre) from finexecDet where accname in";
            quer = quer + " (select recordId from finaccounts where accgroup in";
            quer = quer + " (select recordID from finaccgroups where(grpTag like 'c%' or grpTag like 'd%') and customerCode = " + usr.cCode + ") and customerCode = " + usr.cCode + ") and dat >= '" + dat1 + "' and dat < '" + dat2 + "' group by right(dbo.strdate(dat), 6)";

            DataBaseContext g = new DataBaseContext();
            SqlCommand dc = new SqlCommand();
            dc.Connection = g.db;
            g.db.Open();
            dc.CommandText = quer;
            SqlDataReader dr = dc.ExecuteReader();
            int sno = 1;
            while (dr.Read())
            {
                list.Add(new DashBoardDetails
                {
                    sno =sno,
                    descr = dr[1].ToString(),
                    fir = double.Parse(dr[2].ToString()),
                    sec = double.Parse(dr[3].ToString()),
                    typ=2
                });
                sno++;
            }
            dr.Close();



            g.db.Close();



            return list;
        }
    }
}

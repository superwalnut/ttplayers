using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Models
{
    public class TtEventCsvModel
    {
        //Date,Director,ID,Name,State,Province,Country,Sport,Submitted,Revised,LastProcessed,Club,ITTF_Year,ITTF_ID,ITTF,ITTF_Adult,ITTF_Junior
        public string Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Director { get; set; }
        public string State { get; set; } //not used
        public string Province { get; set; }
        public string Country { get; set; }

        public string Sport { get; set; } // not used

        //public DateTime? SubmittedDate { get; set; }
        //public DateTime? RevisedDate { get; set; }
        //public DateTime? LastProcessedDate { get; set; }

        public string ClubId { get; set; }

        public string ITTF_Year { get; set; }// not used
        public string ITTF { get; set; }// not used
        public string ITTF_ID { get; set; }// not used
        public string ITTF_Adult { get; set; }// not used
        public string ITTF_Junior { get; set; }// not used
    }
}

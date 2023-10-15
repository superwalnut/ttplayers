using CsvHelper.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Domain.Models;

namespace TtPlayers.Importer.Domain.CsvMapping
{
    public class TtEventCsvMapping : ClassMap<TtEventCsvModel>
    {
        public TtEventCsvMapping()
        {
            //Date,Director,ID,Name,State,Province,Country,Sport,Submitted,Revised,LastProcessed,Club,ITTF_Year,ITTF_ID,ITTF,ITTF_Adult,ITTF_Junior
            Map(m => m.Date).Index(0).TypeConverterOption.Format("yyyy-MM-dd");
            Map(m => m.Director).Index(1);
            Map(m => m.Id).Index(2);
            Map(m => m.Name).Index(3);
            Map(m => m.State).Index(4);
            Map(m => m.Province).Index(5);
            Map(m => m.Country).Index(6);
            Map(m => m.Sport).Index(7);
            //Map(m => m.SubmittedDate).Index(8).TypeConverterOption.Format("yyyy-MM-ddTHH:mm:sszzz");
            //Map(m => m.RevisedDate).Index(9).TypeConverterOption.Format("yyyy-MM-ddTHH:mm:sszzz");
            //Map(m => m.LastProcessedDate).Index(10).TypeConverterOption.Format("yyyy-MM-ddTHH:mm:sszzz");
            Map(m => m.ClubId).Index(11);
            Map(m => m.ITTF_Year).Index(12);
            Map(m => m.ITTF_ID).Index(13);
            Map(m => m.ITTF).Index(14);
            Map(m => m.ITTF_Adult).Index(15);
            Map(m => m.ITTF_Junior).Index(16);
        }
    }
}

using CsvHelper.Configuration;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Domain.Models;

namespace TtPlayers.Importer.Domain.CsvMapping
{
    public class PlayerCsvMapping : ClassMap<PlayerCsvModel>
    {
        public PlayerCsvMapping()
        {
            //Name,ID,Rating,StDev,PrimaryClub,City,State,Province,PostalCode,Country,Deceased,Sex,Sport,USATT_ID,TTA_ID,LastPlayed,LastEvent,ITTF,ITTF_ID
            Map(m => m.Name).Index(0);
            Map(m => m.Id).Index(1);
            Map(m => m.Rating).Index(2);
            Map(m => m.StDev).Index(3);
            Map(m => m.PrimaryClubId).Index(4);
            Map(m => m.City).Index(5);
            Map(m => m.State).Index(6);
            Map(m => m.Province).Index(7);

            Map(m => m.PostalCode).Index(8);
            Map(m => m.Country).Index(9);
            Map(m => m.Deceased).Index(10);
            Map(m => m.Sex).Index(11);
            Map(m => m.Sport).Index(12);
            Map(m => m.USATT_ID).Index(13);
            Map(m => m.TTA_ID).Index(14);
            Map(m => m.LastPlayed).Index(15).TypeConverterOption.Format("yyyy-MM-dd");
            Map(m => m.LastEventId).Index(16);
            Map(m => m.ITTF).Index(17);
            Map(m => m.ITTF_ID).Index(18);
        }
    }
}

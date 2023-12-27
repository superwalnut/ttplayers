using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;

namespace TtPlayers.Importer.Applications
{
    public interface IGoogleSiteMapGenerator
    {
        Task Build();
    }

    public class GoogleSiteMapGenerator : IGoogleSiteMapGenerator
    {
        private readonly string _baseUrl = "https://ttplayers.com.au";
        private readonly IDocumentRepository<Player> _playerRepository;
        private readonly IDocumentRepository<TtEvent> _eventRepository;
        private readonly IDocumentRepository<Club> _clubRepository;

        public GoogleSiteMapGenerator(IDocumentRepository<Player> playerRepository, IDocumentRepository<TtEvent> eventRepository, IDocumentRepository<Club> clubRepository)
        {
            _eventRepository = eventRepository;
            _clubRepository = clubRepository;
            _playerRepository = playerRepository;
        }

        public async Task Build()
        {
            var players = await _playerRepository.FilterByAsync(x => true);
            var events = await _eventRepository.FilterByAsync(_ => true);
            var clubs = await _clubRepository.FilterByAsync(_ => true);

            var xmlDoc = PrepareSitemapXml(players, events, clubs);
            SaveXml(xmlDoc);
            Console.WriteLine("Sitemap generated successfully.");
        }

        public XmlDocument PrepareSitemapXml(List<Player> players, List<TtEvent> events, List<Club> clubs)
        {
            // Create a new XML document
            XmlDocument xmlDoc = new XmlDocument();

            // Create XML declaration
            XmlDeclaration xmlDeclaration = xmlDoc.CreateXmlDeclaration("1.0", "UTF-8", null);
            xmlDoc.AppendChild(xmlDeclaration);

            // Create root element (urlset)
            XmlElement root = xmlDoc.CreateElement("urlset");
            root.SetAttribute("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");
            xmlDoc.AppendChild(root);

            AddUrl(xmlDoc, root, $"{_baseUrl}");
            AddUrl(xmlDoc, root, $"{_baseUrl}/players");
            AddUrl(xmlDoc, root, $"{_baseUrl}/players?state=NSW");
            AddUrl(xmlDoc, root, $"{_baseUrl}/players?state=VIC");
            AddUrl(xmlDoc, root, $"{_baseUrl}/players?state=QLD");
            AddUrl(xmlDoc, root, $"{_baseUrl}/players?state=SA");
            AddUrl(xmlDoc, root, $"{_baseUrl}/players?state=TAS");
            AddUrl(xmlDoc, root, $"{_baseUrl}/players?state=WA");
            AddUrl(xmlDoc, root, $"{_baseUrl}/players?state=ACT");
            AddUrl(xmlDoc, root, $"{_baseUrl}/players?state=NT");

            AddUrl(xmlDoc, root, $"{_baseUrl}/events");
            AddUrl(xmlDoc, root, $"{_baseUrl}/events?state=NSW");
            AddUrl(xmlDoc, root, $"{_baseUrl}/events?state=VIC");
            AddUrl(xmlDoc, root, $"{_baseUrl}/events?state=QLD");
            AddUrl(xmlDoc, root, $"{_baseUrl}/events?state=SA");
            AddUrl(xmlDoc, root, $"{_baseUrl}/events?state=TAS");
            AddUrl(xmlDoc, root, $"{_baseUrl}/events?state=WA");
            AddUrl(xmlDoc, root, $"{_baseUrl}/events?state=ACT");
            AddUrl(xmlDoc, root, $"{_baseUrl}/events?state=NT");

            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=M&state=NSW");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=M&state=VIC");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=M&state=QLD");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=M&state=SA");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=M&state=TAS");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=M&state=WA");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=M&state=ACT");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=M&state=NT");

            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=F&state=NSW");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=F&state=VIC");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=F&state=QLD");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=F&state=SA");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=F&state=TAS");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=F&state=WA");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=F&state=ACT");
            AddUrl(xmlDoc, root, $"{_baseUrl}/rankings?gender=F&state=NT");

            AddUrl(xmlDoc, root, $"{_baseUrl}/clubs");
            AddUrl(xmlDoc, root, $"{_baseUrl}/clubs?state=NSW");
            AddUrl(xmlDoc, root, $"{_baseUrl}/clubs?state=VIC");
            AddUrl(xmlDoc, root, $"{_baseUrl}/clubs?state=QLD");
            AddUrl(xmlDoc, root, $"{_baseUrl}/clubs?state=SA");
            AddUrl(xmlDoc, root, $"{_baseUrl}/clubs?state=TAS");
            AddUrl(xmlDoc, root, $"{_baseUrl}/clubs?state=WA");
            AddUrl(xmlDoc, root, $"{_baseUrl}/clubs?state=ACT");
            AddUrl(xmlDoc, root, $"{_baseUrl}/clubs?state=NT");

            AddUrl(xmlDoc, root, $"{_baseUrl}/wiki");
            AddUrl(xmlDoc, root, $"{_baseUrl}/wiki/butterfly");
            AddUrl(xmlDoc, root, $"{_baseUrl}/wiki/double-happiness");
            AddUrl(xmlDoc, root, $"{_baseUrl}/wiki/joola");
            AddUrl(xmlDoc, root, $"{_baseUrl}/wiki/stiga");
            AddUrl(xmlDoc, root, $"{_baseUrl}/wiki/tibhar");
            AddUrl(xmlDoc, root, $"{_baseUrl}/wiki/killerspin");
            AddUrl(xmlDoc, root, $"{_baseUrl}/wiki/nittaku");
            AddUrl(xmlDoc, root, $"{_baseUrl}/wiki/xiom");
            AddUrl(xmlDoc, root, $"{_baseUrl}/wiki/729");
            AddUrl(xmlDoc, root, $"{_baseUrl}/wiki/cornilleau");
            AddUrl(xmlDoc, root, $"{_baseUrl}/wiki/donic");
            AddUrl(xmlDoc, root, $"{_baseUrl}/wiki/yasaka");
            AddUrl(xmlDoc, root, $"{_baseUrl}/wiki/andro");
            AddUrl(xmlDoc, root, $"{_baseUrl}/wiki/victas");

            AddUrl(xmlDoc, root, $"{_baseUrl}/blogs");

            foreach (var player in players)
            {
                AddUrl(xmlDoc, root, $"{_baseUrl}/player/{player.Id}");
            }

            foreach(var evt in events)
            {
                AddUrl(xmlDoc, root, $"{_baseUrl}/event/{evt.Id}");
            }

            foreach(var club in clubs)
            {
                AddUrl(xmlDoc, root, $"{_baseUrl}/club/{club.Id}");
            }

            return xmlDoc;
        }

        public void SaveXml(XmlDocument xmlDoc)
        {
            // Save XML document to file
            xmlDoc.Save("sitemap.xml");
        }

        // Function to add URLs to the sitemap
        public void AddUrl(XmlDocument xmlDoc, XmlElement root, string url)
        {
            // Create url element
            XmlElement urlElement = xmlDoc.CreateElement("url");

            // Create loc element
            XmlElement locElement = xmlDoc.CreateElement("loc");
            locElement.InnerText = url;
            urlElement.AppendChild(locElement);

            //create <lastmod>
            XmlElement lastmodElement = xmlDoc.CreateElement("lastmod");
            lastmodElement.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
            urlElement.AppendChild(lastmodElement);

            // Add url to the root element
            root.AppendChild(urlElement);
        }
    }
}
